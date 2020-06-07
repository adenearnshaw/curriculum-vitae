using System.Threading.Tasks;
using CurriculumVitae.Forms.Managers;

namespace CurriculumVitae.Forms.ViewModels
{
    public class ObjectivesPageViewModel : BaseViewModel
    {
        private readonly CvDataManager _cvDataManager;

        private string _objectives;
        public string Objectives
        {
            get => _objectives;
            set => SetProperty(ref _objectives, value);
        }

        public ObjectivesPageViewModel(CvDataManager cvDataManager)
        {
            _cvDataManager = cvDataManager;
        }

        public override async Task OnNavigatedTo(params object[] navigationParams)
        {
            try
            {
                IsBusy = true;

                var data = await _cvDataManager.LoadCvData();

                Objectives = data.CareerObjectives;
            }
            finally
            {
                IsBusy = false;
            }
        }
    }
}
