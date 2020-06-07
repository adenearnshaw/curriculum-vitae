using CurriculumVitae.Forms.ViewModels;

namespace CurriculumVitae.Forms.Views
{
    public partial class LoadingPage : LoadingBasePage
    {
        public LoadingPage()
        {
            InitializeComponent();
        }

        protected override async void OnAppearing()
        {
            base.OnAppearing();

            await ViewModel.OnNavigatingTo();

            App.Current.MainPage = new AppShell();
        }
    }

    public abstract class LoadingBasePage : BaseContentPage<LoadingPageViewModel> { }
}
