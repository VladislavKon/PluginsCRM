using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Plugins.CustomWorkflow
{
    public class CustomStep : CodeActivity
    {
        [RequiredArgument]
        [Input("Input Text")]
        public InArgument<string> InputText { get; set; }

        [Output("Add HTML+style")]
        public OutArgument<string> CountOfWords { get; set; }
        protected override void Execute(CodeActivityContext context)
        {            
            var descString = this.InputText.Get<string>(context);
            string str = @"<div style=""height: 100px; width: 150px; background:#74992e"">";
            string htmlString = str + descString + "</div>";
            this.CountOfWords.Set(context, htmlString);
        }
    }
}
