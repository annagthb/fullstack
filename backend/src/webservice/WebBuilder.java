package backend.src.webservice;

public class WebBuilder implements IHostBuilder {

    private boolean initialised = false;

    public WebBuilder() {
        this.initialised = true;
    }

    public IHostBuilder CreateDefaultBuilder() {
        return this;
    };

    public void useStartup(StartupSettings startup) {
    }

    @Override
    public IHostBuilder configureWebHostDefaults() {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method
        // 'configureWebHostDefaults'");
        return new WebBuilder();
    }

    public void Run() {
    };
}
