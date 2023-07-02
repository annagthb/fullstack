package backend.src.webservice;

public class Services implements IServices {

    public Services(String[] args) {
    }

    public WebBuilder CreateHostBuilder() {
        return new WebBuilder();
    }

    public WebBuilder Build(WebBuilder host, StartupSettings startup) {
        host.useStartup(startup);
        host.CreateDefaultBuilder().configureWebHostDefaults();

        return host;
    }

    public void Run(IHostBuilder host) {
    }
}