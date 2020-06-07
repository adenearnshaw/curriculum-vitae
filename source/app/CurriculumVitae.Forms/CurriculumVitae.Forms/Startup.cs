using System;
using CurriculumVitae.Forms.Data;
using CurriculumVitae.Forms.Managers;
using CurriculumVitae.Forms.ViewModels;
using CurriculumVitae.Forms.Views;
using Microsoft.Extensions.DependencyInjection;
using Shiny;

namespace CurriculumVitae.Forms
{
    public class Startup : ShinyStartup
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<CvClient>();

            services.AddSingleton<CvDataManager>();

            services.AddTransient<LoadingPageViewModel>();
            services.AddTransient<ObjectivesPageViewModel>();
        }

        public override void ConfigureApp(IServiceProvider provider)
        {
            base.ConfigureApp(provider);
            Locator.SetProvider(provider);
        }
    }
}
