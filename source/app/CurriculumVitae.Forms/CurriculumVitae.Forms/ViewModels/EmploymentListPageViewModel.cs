using System.Linq;
using System.Threading.Tasks;
using CurriculumVitae.Forms.Managers;
using CurriculumVitae.Forms.Models;
using MvvmHelpers;

namespace CurriculumVitae.Forms.ViewModels
{
    public class EmploymentListPageViewModel : BaseViewModel
    {
        private readonly CvDataManager _cvDataManager;
        private CvData _cvData;

        private bool _showAll;
        public bool ShowAll
        {
            get => _showAll;
            set
            {
                if (SetProperty(ref _showAll, value))
                    UpdateVisibleRoles(_showAll);
            }
        }

        private ObservableRangeCollection<EmploymentDetail> _employmentDetails;
        public ObservableRangeCollection<EmploymentDetail> EmploymentDetails
        {
            get => _employmentDetails;
            set => SetProperty(ref _employmentDetails, value);
        }

        public EmploymentListPageViewModel(CvDataManager cvDataManager)
        {
            _cvDataManager = cvDataManager;

            EmploymentDetails = new ObservableRangeCollection<EmploymentDetail>();
        }

        public override async Task OnNavigatedTo(params object[] navigationParams)
        {
            _cvData = await _cvDataManager.LoadCvData();

            UpdateVisibleRoles(false);
        }

        private void UpdateVisibleRoles(bool showAll)
        {
            if (showAll)
                EmploymentDetails.ReplaceRange(_cvData.EmploymentDetails);
            else
                EmploymentDetails.ReplaceRange(_cvData.EmploymentDetails.Where(e => !e.IsOmittedInPrint));
        }
    }
}
