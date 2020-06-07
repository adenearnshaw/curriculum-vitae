using Xamarin.Forms;
using CurriculumVitae.Forms.Views;
using System.Collections.Generic;

namespace CurriculumVitae.Forms
{
    public partial class App : Application
    {
        public App()
        {
            Xamarin.Forms.Device.SetFlags(new List<string>() {
                    "Markup_Experimental",
                    "StateTriggers_Experimental",
                    "IndicatorView_Experimental",
                    "CarouselView_Experimental",
                    "AppTheme_Experimental",
                    "SwipeView_Experimental"
            });

            InitializeComponent();

            MainPage =  new LoadingPage();
        }
    }
}
