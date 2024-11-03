using System.ComponentModel.DataAnnotations.Schema;

namespace QuotationService.Model;

public class Material
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public double Qty { get; set; } = 0;
    public double Price {  get; set; } = 0;
    public string Units {  get; set; } = string.Empty;

    public int QuotationFormId {  get; set; }
    [ForeignKey(nameof(QuotationFormId))]
    public QuotationForm QuotationForm { get; set; }
}
