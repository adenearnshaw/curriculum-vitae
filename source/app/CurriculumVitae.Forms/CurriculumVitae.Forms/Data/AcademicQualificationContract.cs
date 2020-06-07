using System;
using Newtonsoft.Json;
using Sanity.Linq;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class AcademicQualificationContract : SanityDocument
    {
        public AcademicQualificationContract()
        {
            SanityType = "academicQualification";
        }

        [JsonProperty("start_date")]
        public DateTimeOffset StartDate { get; set; }

        [JsonProperty("end_date")]
        public DateTimeOffset EndDate { get; set; }

        public string Institution { get; set; }

        public SanityBlock Details { get; set; }
    }
}