using System;
using CurriculumVitae.Forms.Managers;

namespace CurriculumVitae.Forms.ViewModels
{
    public class PortfolioPageViewModel : BaseViewModel
    {
        private readonly CvDataManager _cvDataManager;

        public PortfolioPageViewModel(CvDataManager cvDataManager)
        {
            _cvDataManager = cvDataManager;
        }
    }
}
