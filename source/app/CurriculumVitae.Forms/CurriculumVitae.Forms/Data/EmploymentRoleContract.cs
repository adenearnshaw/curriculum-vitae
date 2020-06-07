using System;
using Newtonsoft.Json;
using Sanity.Linq;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class EmploymentRoleContract : SanityDocument
    {
        public EmploymentRoleContract()
        {
            SanityType = "employmentHistory";
        }


        [Include("id")]
        public string RoleId { get; set; }

        public string Employer { get; set; }

        public string Position { get; set; }

        [JsonProperty("start_date")]
        public DateTimeOffset StartDate { get; set; }

        [JsonProperty("end_date")]
        public DateTimeOffset? EndDate { get; set; }

        public string Overview { get; set; }

        public SanityBlock[] Details { get; set; }

        public string[] Skills { get; set; }

        [JsonProperty("is_omitted_in_print")]
        public bool IsOmittedInPrint { get; set; }
    }
}