package backend.src.webservice;

public interface IHostBuilder {

    public IHostBuilder CreateDefaultBuilder();

    public IHostBuilder configureWebHostDefaults();

    public void useStartup(StartupSettings startup);

}
