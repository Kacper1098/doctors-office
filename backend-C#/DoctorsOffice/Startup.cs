using System;
using System.IO;
using System.Linq;
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
            var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING") ??
                                   Configuration.GetConnectionString("DoctorsOfficeContext");
            services.AddDbContext<MyDbContext>(opt =>
                opt.UseNpgsql(connectionString));

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
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, MyDbContext dbContext)
        {
            dbContext.Database.Migrate();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseRouting();

            app.UseEndpoints(endpoints => { endpoints.MapControllers(); });

            ApplyMigrations(dbContext);
        }

        private void ApplyMigrations(DbContext context)
        {
            if (context.Database.GetPendingMigrations().Any())
            {
                context.Database.Migrate();
            }
        }
    }
}