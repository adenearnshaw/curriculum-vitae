using System;
using Microsoft.Extensions.DependencyInjection;

namespace CurriculumVitae.Forms
{
    public static class Locator
    {
        public static IServiceProvider ServiceProvider { get; private set; }

        public static void SetProvider(IServiceProvider provider)
        {
            ServiceProvider = provider;
        }

        public static T Get<T>() => ServiceProvider.GetService<T>();
    }
}
