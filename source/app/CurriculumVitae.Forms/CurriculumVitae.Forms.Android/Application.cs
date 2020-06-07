using System;
using Android.App;
using Android.Runtime;

namespace CurriculumVitae.Forms.Droid
{
    [Application]
    public class Application : Shiny.ShinyAndroidApplication<Startup>
    {
        public Application(IntPtr handle, JniHandleOwnership transfer) : base(handle, transfer)
        {
        }
    }
}
