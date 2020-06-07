using System.Threading.Tasks;
using CurriculumVitae.Forms.Managers;
using MvvmHelpers;

namespace CurriculumVitae.Forms.ViewModels
{
    public class LoadingPageViewModel : BaseViewModel
    {
        private readonly CvDataManager _cvDataManager;

        private string _careerObjectives;
        public string CareerObjectives
        {
            get => _careerObjectives;
            set => SetProperty(ref _careerObjectives, value);
        }

        public LoadingPageViewModel(CvDataManager cvDataManager)
        {
            _cvDataManager = cvDataManager;
        }

        public async Task OnNavigatingTo(params object[] navigationParams)
        {
            try
            {
                IsBusy = true;

                _ = await _cvDataManager.LoadCvData();
            }
            finally
            {
                IsBusy = false;
            }
        }
    }
}
