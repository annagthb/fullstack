package backend.src.webservice;

import java.lang.System;

public class Program {
    public static void main(String[] args) {
        Services services = new Services(args);
        WebBuilder host = services.CreateHostBuilder();
        StartupSettings startupSettings = new StartupSettings();
        services.Build(host, startupSettings).Run();
        System.out.println("Hello World");
    }

}
