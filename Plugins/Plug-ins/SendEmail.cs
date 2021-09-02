using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Deployment;
using Microsoft.Xrm.Sdk.Messages;
using Microsoft.Xrm.Sdk.Metadata;
using Microsoft.Xrm.Sdk.Query;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plugins.Plug_ins
{
    public class SendEmail : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            IPluginExecutionContext context = (IPluginExecutionContext)serviceProvider.GetService(typeof(IPluginExecutionContext));

            IOrganizationServiceFactory serviceFactory = (IOrganizationServiceFactory)serviceProvider.GetService(typeof(IOrganizationServiceFactory));
            IOrganizationService service = serviceFactory.CreateOrganizationService(context.UserId);
            

            RetrieveEntityRequest retrieveEntityRequest = new RetrieveEntityRequest
            {
                EntityFilters = EntityFilters.All,
                LogicalName = "myxrm_contact"
            };

            RetrieveEntityResponse retrieveAccountEntityResponse = (RetrieveEntityResponse)service.Execute(retrieveEntityRequest);
            EntityMetadata AccountEntity = retrieveAccountEntityResponse.EntityMetadata;
            Entity entity = (Entity)context.InputParameters["Target"];

            var guid = entity.Id;
            Entity contactEntity = service.Retrieve("myxrm_contact", guid, new ColumnSet(true));
                        
            var contactId = contactEntity.Attributes["myxrm_contactid"];
            
            Guid contId = (Guid)contactId;

            
            Entity fromParty = new Entity("activityparty");
            Entity toParty = new Entity("activityparty");

            toParty["partyid"] = new EntityReference("myxrm_contact", contId);
            fromParty["partyid"] = new EntityReference("systemuser", context.UserId);

            Entity email = new Entity("email");

            email["from"] = new Entity[] { fromParty };
            email["to"] = new Entity[] { toParty };
            email["regardingobjectid"] = new EntityReference("myxrm_contact", contId);
            email["subject"] = "This is the subject";
            email["description"] = "This is the description.";
            email["directioncode"] = true;
            Guid emailId = service.Create(email);

            SendEmailRequest sendEmailRequest = new SendEmailRequest
            {
                EmailId = emailId,
                TrackingToken = "",
                IssueSend = true
            };

            SendEmailResponse sendEmailresp = (SendEmailResponse)service.Execute(sendEmailRequest);

        }
    }
}
