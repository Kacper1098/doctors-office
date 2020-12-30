using System.IO;
using DoctorsOffice.DbModels;
using DoctorsOffice.Repositories;
using DoctorsOffice.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;

namespace DoctorsOffice
{
    public class Startup
    {
        public IConfiguration Configuration { get; }
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<MyDbContext>(opt => opt.UseNpgsql(Configuration.GetConnectionString("DoctorsOfficeContext")));

            services.AddScoped<VisitRepository>();
            services.AddScoped<DoctorRepository>();
            services.AddScoped<FacilityRepository>();
            services.AddScoped<PatientRepository>();
            services.AddScoped<VisitService>();
            services.AddScoped<DoctorService>();
            services.AddScoped<FacilityService>();
            services.AddScoped<PatientService>();

            services.AddCors();
            services.AddControllers();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, MyDbContext apiContext)
        {
            apiContext.Database.Migrate(); 
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors(
                options => options.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod()
            );
            
            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
        }
    }
}
