using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plugins.Plug_ins
{
    class SendMail
    {
        private void SendEmail(IOrganizationService service, EntityReference sender, EntityReference recipientID, string subject, string body, bool hasCC, Guid cc, Entity regardingEntity)
        {
            Guid _emailid = Guid.Empty;

            Entity FromParty = new Entity("activityparty");
            FromParty["partyid"] = new EntityReference(sender.LogicalName, sender.Id);

            Entity Email = new Entity("email");

            Entity ToParty = new Entity("activityparty");
            ToParty["partyid"] = new EntityReference(recipientID.LogicalName, recipientID.Id);

            Email.Attributes["to"] = new Entity[] { ToParty };

            if (hasCC)
            {
                Entity ccParty = new Entity("activityparty");
                ccParty["partyid"] = new EntityReference("systemuser", cc);
                Email.Attributes["cc"] = new Entity[] { ccParty };
            }

            Email.Attributes["from"] = new Entity[] { FromParty };
            Email.Attributes["subject"] = subject;
            Email.Attributes["description"] = body;

            Email.Attributes["regardingobjectid"] = new EntityReference(regardingEntity.LogicalName, regardingEntity.Id);
            _emailid = service.Create(Email);

            if (_emailid != Guid.Empty)
            {
                SendEmailRequest sendEmailreq = new SendEmailRequest
                {
                    EmailId = _emailid,
                    TrackingToken = "",
                    IssueSend = true
                };

                SendEmailResponse sendEmailresp = (SendEmailResponse)service.Execute(sendEmailreq);
            }
        }
    }
}
