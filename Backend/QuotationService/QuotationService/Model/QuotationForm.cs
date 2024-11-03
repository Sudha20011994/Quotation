namespace QuotationService.Model;

public class QuotationForm
{
    public int Id {  get; set; }
    public string QuotationNo { get; set; }=string.Empty;
    public string CustomerNo { get; set; } = string.Empty;
    public string CustomerName { get; set; } = string.Empty;
    public string PaymentTerms { get; set; } = string.Empty;
    public Double NetValue { get; set; } = 0;
    public DateTime DeliveryDate {  get; set; }
    public DateTime QuotationValidity { get; set; }

    public IEnumerable<Material> Materials { get; set; } = new List<Material>();
}
