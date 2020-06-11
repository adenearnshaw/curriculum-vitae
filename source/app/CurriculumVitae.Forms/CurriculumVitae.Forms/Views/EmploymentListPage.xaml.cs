using System;
using System.Collections.Generic;
using CurriculumVitae.Forms.ViewModels;
using Xamarin.Forms;

namespace CurriculumVitae.Forms.Views
{
    public partial class EmploymentListPage : EmploymentListBasePage
    {
        public EmploymentListPage()
        {
            InitializeComponent();
        }
    }

    public abstract class EmploymentListBasePage : BaseContentPage<EmploymentListPageViewModel> { }
}
