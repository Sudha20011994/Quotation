using Microsoft.EntityFrameworkCore;

namespace QuotationService.Model;

public class QuotationDbContext : DbContext
{
    public QuotationDbContext(DbContextOptions<QuotationDbContext> options) : base(options) { }

    public DbSet<QuotationForm> QuotationForms { get; set; }
    public DbSet<Material> Materials { get; set; }

}
