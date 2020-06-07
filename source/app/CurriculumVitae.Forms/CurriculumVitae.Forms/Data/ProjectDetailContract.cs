using System.Collections.Generic;
using Sanity.Linq;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class ProjectDetailContract : SanityDocument
    {
        public ProjectDetailContract()
        {
            SanityType = "projectDetail";
        }

        [Include("id")]
        public string ProjectId { get; set; }

        [Include("name")]
        public string Name { get; set; }

        [Include("short_name")]
        public string ShortName { get; set; }

        public SanityBlock[] Description { get; set; }

        public List<string> Technologies { get; set; } = new List<string>();

        public SanityImage Icon { get; set; }

        public SanityImage Banner { get; set; }
    }
}
