using System.IO;
using System.Linq;
using System.Reflection;
using Microsoft.EntityFrameworkCore.Migrations;

namespace DoctorsOffice.Migrations
{
    public partial class CustomScript : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(GetEmbededQuery("data.sql"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }

        private string GetEmbededQuery(string filename)
        {
            var filenames = Assembly.GetCallingAssembly().GetManifestResourceNames();
            var queryFilename = filenames.Where(x => x.EndsWith(filename)).FirstOrDefault();

            var stream = Assembly.GetCallingAssembly().GetManifestResourceStream(queryFilename);
            using (var streamReader = new StreamReader(stream))
            {
                return streamReader.ReadToEnd();
            }
        }
    }
}
