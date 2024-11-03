using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace QuotationService.Controllers;

public class QuotationController : Controller
{
    // GET: Quotation
    public ActionResult Index()
    {
        return View();
    }

    // GET: Quotation/Details/5
    public ActionResult Details(int id)
    {
        return View();
    }

    // GET: Quotation/Create
    public ActionResult Create()
    {
        return View();
    }

    // POST: Quotation/Create
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Create(IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }

    // GET: Quotation/Edit/5
    public ActionResult Edit(int id)
    {
        return View();
    }

    // POST: Quotation/Edit/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Edit(int id, IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }

    // GET: Quotation/Delete/5
    public ActionResult Delete(int id)
    {
        return View();
    }

    // POST: Quotation/Delete/5
    [HttpPost]
    [ValidateAntiForgeryToken]
    public ActionResult Delete(int id, IFormCollection collection)
    {
        try
        {
            return RedirectToAction(nameof(Index));
        }
        catch
        {
            return View();
        }
    }
}
