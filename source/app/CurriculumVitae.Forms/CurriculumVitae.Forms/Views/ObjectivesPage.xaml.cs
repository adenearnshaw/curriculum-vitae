using CurriculumVitae.Forms.ViewModels;
using Xamarin.Forms;

namespace CurriculumVitae.Forms.Views
{
    public partial class ObjectivesPage : ObjectivesBasePage
    {
        public ObjectivesPage()
        {
            InitializeComponent();
        }
    }

    public abstract class ObjectivesBasePage : BaseContentPage<ObjectivesPageViewModel> { }
}
