using System;
using System.Linq;
using System.Threading.Tasks;
using CurriculumVitae.Forms.Data;
using CurriculumVitae.Forms.Models;

namespace CurriculumVitae.Forms.Managers
{
    public class CvDataManager
    {
        private readonly CvClient _client;

        private CvData _data;


        public CvDataManager(CvClient client)
        {
            _client = client;
        }

        public async Task<CvData> LoadCvData()
        {
            if (_data != null)
                return _data;

            var mainContentTask = _client.FetchMainContent();
            var academicQualificationsTask = _client.FetchAcademicQualifications();
            var employmentHistoryTask = _client.FetchEmploymentHistory();

            await Task.WhenAll(mainContentTask, academicQualificationsTask, employmentHistoryTask).ConfigureAwait(false);

            _data = new CvData
            {
                ContactDetails = mainContentTask.Result.ContactDetails.Select(c => new ContactDetail
                {
                    Description = c.Value.Description,
                    Text = c.Value.Text,
                    Href = c.Value.Href
                }).ToList(),
                CareerObjectives = await _client.ConvertBlockToHtml(mainContentTask.Result.CareerObjectives)
            };

            return _data;
        }

    }
}
