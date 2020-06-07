using System;
using System.Threading.Tasks;

namespace CurriculumVitae.Forms.Navigation
{
    public interface INavigationAware
    {
        Task OnNavigatedTo(params object[] navigationParams);
        Task OnNavigatingFrom();
    }
}
