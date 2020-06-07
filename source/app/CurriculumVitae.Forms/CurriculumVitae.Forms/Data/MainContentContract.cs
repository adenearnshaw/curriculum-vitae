using System.Collections.Generic;
using Sanity.Linq;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class MainContentContract : SanityDocument
    {
        public MainContentContract()
        {
            SanityType = "mainContent";
        }

        [Include("contact_details")]
        public List<SanityReference<ContactDetailContract>> ContactDetails { get; set; } = new List<SanityReference<ContactDetailContract>>();

        [Include]
        public List<SanityReference<ProjectDetailContract>> Projects { get; set; } = new List<SanityReference<ProjectDetailContract>>();

        [Include("career_objectives")]
        public SanityBlock[] CareerObjectives { get; set; }

        public List<string> Skills { get; set; }

        public string Interests { get; set; }
    }
}
