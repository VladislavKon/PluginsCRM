using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using Microsoft.Xrm.Tooling.Connector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plugins
{
    class SendMessage : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            SendMail();
        }
        public void SendMail()
        {
            var connectionString = @"AuthType = Office365; Url = https://mycrm20.crm11.dynamics.com/;Username=vkonshin@myTrialCRMorg.onmicrosoft.com;Password=fy8C1&@A";
            CrmServiceClient conn = new CrmServiceClient(connectionString);

            IOrganizationService service;
            service = (IOrganizationService)conn.OrganizationWebProxyClient != null ? (IOrganizationService)conn.OrganizationWebProxyClient : (IOrganizationService)conn.OrganizationServiceProxy;

            // Get a system user to send the email (From: field)
            WhoAmIRequest systemUserRequest = new WhoAmIRequest();
            WhoAmIResponse systemUserResponse = (WhoAmIResponse)service.Execute(systemUserRequest);
            Guid userId = systemUserResponse.UserId;

            RetrieveEntityRequest retrieveEntityRequest = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.All,
                LogicalName = "myxrm_contact"
            };

            RetrieveEntityResponse retrieveAccountEntityResponse = (RetrieveEntityResponse)service.Execute(retrieveEntityRequest);
            EntityMetadata AccountEntity = retrieveAccountEntityResponse.EntityMetadata;
            var contactName = new AttributeMetadata();
            object contactId = new object();

            foreach (object attribute in AccountEntity.Attributes)
            {                
                AttributeMetadata a = (AttributeMetadata)attribute;
                if(a.LogicalName=="myxrm_contactname")
                    contactName = a;
                if (a.LogicalName == "myxrm_contactid")
                    contactId = attribute;
            }

            // We will get the contact id for Bob Smith using Retrieve
            ConditionExpression conditionExpression = new ConditionExpression();
            conditionExpression.AttributeName = "myxrm_contactname";
            conditionExpression.Operator = ConditionOperator.Equal;
            conditionExpression.Values.Add(contactName.LogicalName);            

            FilterExpression filterExpression = new FilterExpression();
            filterExpression.Conditions.Add(conditionExpression);

            QueryExpression query = new QueryExpression("myxrm_contact");
            query.ColumnSet.AddColumns("myxrm_contactid");
            query.Criteria.AddFilter(filterExpression);

            EntityCollection entityCollection = service.RetrieveMultiple(query);
            foreach (var a in entityCollection.Entities)
            {
                // We will send the email from this current user
                Entity fromActivityParty = new Entity("activityparty");
                Entity toActivityParty = new Entity("activityparty");

                Guid contId = (Guid)a.Attributes["myxrm_contactid"];

                fromActivityParty["partyid"] = new EntityReference("systemuser", userId);
                toActivityParty["partyid"] = new EntityReference("myxrm_contact", contId);

                Entity email = new Entity("email");
                email["from"] = new Entity[] { fromActivityParty };
                email["to"] = new Entity[] { toActivityParty };
                email["regardingobjectid"] = new EntityReference("contact", contId);
                email["subject"] = "This is the subject";
                email["description"] = "This is the description.";
                email["directioncode"] = true;
                Guid emailId = service.Create(email);

                // Use the SendEmail message to send an e-mail message.
                SendEmailRequest sendEmailRequest = new SendEmailRequest
                {
                    EmailId = emailId,
                    TrackingToken = "",
                    IssueSend = true
                };

                SendEmailResponse sendEmailresp = (SendEmailResponse)service.Execute(sendEmailRequest);
                Console.WriteLine("Email sent");
                Console.ReadLine();
            }

        }

    }

}
