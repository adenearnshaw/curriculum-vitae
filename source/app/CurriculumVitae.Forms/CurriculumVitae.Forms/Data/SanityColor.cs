using Newtonsoft.Json;
using Sanity.Linq.CommonTypes;

namespace CurriculumVitae.Forms.Data
{
    public class SanityColor : SanityDocument
    {
        public SanityColor()
        {
            SanityType = "color";
        }

        [JsonProperty("alpha")]
        public decimal Alpha { get; set; }

        [JsonProperty("hex")]
        public string HexColor { get; set; }
    }
}
