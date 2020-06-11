using System;
using System.Collections.ObjectModel;
using System.Drawing;
using MvvmHelpers;

namespace CurriculumVitae.Forms.Models
{
    public class EmploymentDetail : ObservableObject
    {
        public string RoleId { get; set; }

        public string Employer { get; set; }

        public Color BrandColor { get; set; }

        public string Position { get; set; }

        public DateTimeOffset StartDate { get; set; }

        public DateTimeOffset? EndDate { get; set; }

        public string Overview { get; set; }

        public string Details { get; set; }

        private ObservableCollection<string> _skills = new ObservableCollection<string>();
        public ObservableCollection<string> Skills
        {
            get => _skills;
            set => SetProperty(ref _skills, value);
        }

        public bool IsOmittedInPrint { get; set; }

        public string Dates => $"{StartDate:d} - {(EndDate.HasValue ? EndDate.Value.ToString("d") : "Present")}";
    }
}
