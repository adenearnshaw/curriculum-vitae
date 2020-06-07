using System;
using CurriculumVitae.Forms.Navigation;
using CurriculumVitae.Forms.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.PlatformConfiguration;
using Xamarin.Forms.PlatformConfiguration.iOSSpecific;
using Xamarin.Forms.Markup;

namespace CurriculumVitae.Forms.Views
{
    public class BaseContentPage<TViewModel> : ContentPage, IDisposable where TViewModel : BaseViewModel
    {
        protected object[] NavigationParams { get; private set; } = new object[] { };

        protected TViewModel ViewModel { get; private set; } = Locator.Get<TViewModel>();

 
        public BaseContentPage()
        {
            if (ViewModel == null)
                throw new NullReferenceException($"{nameof(ViewModel)} is null, checked that you have registered it in services");

            BindingContext = ViewModel;
            On<iOS>().SetUseSafeArea(true);

            this.Bind(IsBusyProperty, nameof(ViewModel.IsBusy));
        }

        protected override async void OnAppearing()
        {
            base.OnAppearing();
            await (ViewModel as INavigationAware)?.OnNavigatedTo(NavigationParams);
        }

        protected override async void OnDisappearing()
        {
            await (ViewModel as INavigationAware)?.OnNavigatingFrom();
            base.OnDisappearing();
        }

        public Xamarin.Forms.Page SetParams(params object[] parameters)
        {
            NavigationParams = parameters;
            return this;
        }


        #region IDisposable Support
        private bool disposedValue = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!disposedValue)
            {
                if (disposing)
                {
                    ViewModel = null;
                }
                disposedValue = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
        }
        #endregion
    }
}
