using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Sanity.Linq;
using Sanity.Linq.BlockContent;
using Sanity.Linq.CommonTypes;
using Sanity.Linq.Extensions;

namespace CurriculumVitae.Forms.Data
{
    public class CvClient
    {
        private readonly SanityDataContext _sanity;
        private readonly SanityHtmlBuilder _htmlBuilder;

        public CvClient()
        {
            var options = new SanityOptions
            {
                ProjectId = "a88s2g1n",
                Dataset = "production",
                Token = "skXyOkt52cM7edgsFweNJDNEl3HLWtnYXaeJYCwXsMu9JcMQAIA9HKqEwmyLRaYy4JAVwlNZqSYaWA9LNIreHYpgEPsh2KekD4aCmDIVBlSZToKhdqYI4zM7rz96RXfuNk1ZKKcjyo1iwZbcqrSAw9YTSaPly4MsyrAEvNebYkmKZ1PoBbPT",
                UseCdn = false
            };

            _sanity = new SanityDataContext(options);
            _htmlBuilder = new SanityHtmlBuilder(options);
        }

        public async Task<MainContentContract> FetchMainContent()
        {
            try
            {
                var mainContent = await _sanity.DocumentSet<MainContentContract>()
                                               .Where(d => d.SanityId() == "main-content")
                                               .FirstOrDefaultAsync();

                return mainContent;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }

        public async Task<List<AcademicQualificationContract>> FetchAcademicQualifications()
        {
            try
            {
                var academicQualifications = await _sanity.DocumentSet<AcademicQualificationContract>()
                                                          .ToListAsync();

                return academicQualifications;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }

        public async Task<List<EmploymentRoleContract>> FetchEmploymentHistory()
        {
            try
            {
                var employmentHistory = await _sanity.DocumentSet<EmploymentRoleContract>()
                                                     .ToListAsync();

                return employmentHistory;
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex.Message);
                throw;
            }
        }

        public async Task<string> ConvertBlockToHtml(SanityBlock[] content)
        {
            var html = await _htmlBuilder.BuildAsync(content);
            return html;
        }
    }
}
