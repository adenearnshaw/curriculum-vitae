using Sanity.Linq;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class ContactDetailContract : SanityDocument
    {
        public ContactDetailContract()
        {
            SanityType = "contactDetail";
        }

        public string Description { get; set; }

        public string Text { get; set; }

        public string Href { get; set; }

        [Include("is_hidden")]
        public bool IsHidden { get; set; }

        [Include("is_omitted_in_print")]
        public string IsOmittedInPrint { get; set; }
    }
}
