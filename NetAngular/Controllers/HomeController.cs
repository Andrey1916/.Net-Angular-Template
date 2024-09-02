using Microsoft.AspNetCore.Mvc;

namespace NetAngular.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}