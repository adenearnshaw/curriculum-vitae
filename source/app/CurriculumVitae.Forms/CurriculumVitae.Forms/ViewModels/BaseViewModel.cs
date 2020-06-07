using System;
using System.Threading.Tasks;
using CurriculumVitae.Forms.Navigation;

namespace CurriculumVitae.Forms.ViewModels
{
    public class BaseViewModel : MvvmHelpers.BaseViewModel, INavigationAware
    {
        public BaseViewModel()
        {
        }

        public virtual Task OnNavigatedTo(params object[] navigationParams)
        {
            return Task.CompletedTask;
        }

        public virtual Task OnNavigatingFrom()
        {
            return Task.CompletedTask;
        }
    }
}
