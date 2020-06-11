using System;
using System.Collections.ObjectModel;
using System.Drawing;
using System.Linq;
using System.Threading.Tasks;
using CurriculumVitae.Forms.Data;
using CurriculumVitae.Forms.Models;
using Xamarin.Essentials;

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


            var employmentDetails = employmentHistoryTask.Result.Select(async c => new EmploymentDetail
            {
                RoleId = c.RoleId,
                Details = await _client.ConvertBlockToHtml(c.Details),
                Employer = c.Employer,
                EndDate = c.EndDate,
                IsOmittedInPrint = c.IsOmittedInPrint,
                Overview = c.Overview,
                Position = c.Position,
                Skills = new ObservableCollection<string>(c?.Skills ?? new string[] { }),
                StartDate = c.StartDate,
                BrandColor = c.BrandColor != null
                    ? ColorConverters.FromHex(c.BrandColor.HexColor).WithAlpha(Convert.ToInt32(256 * c.BrandColor.Alpha)) //$"#{c.BrandColor.Alpha:X}{c.BrandColor.HexColor.Replace("#","")}"
                    : Color.Transparent// "#FFFFFFFF"
            }).Select(t => t.Result);

            var contactDetails = mainContentTask.Result.ContactDetails.Select(c => new ContactDetail
            {
                Description = c.Value.Description,
                Text = c.Value.Text,
                Href = c.Value.Href
            });

            var careerObjectives = await _client.ConvertBlockToHtml(mainContentTask.Result.CareerObjectives);


            _data = new CvData
            {
                ContactDetails = contactDetails.ToList(),
                CareerObjectives = careerObjectives,
                EmploymentDetails = employmentDetails.ToList()
            };

            return _data;
        }

    }
}
