package com.whut.cailiao.online;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ImportResource;

/**
 * Created by niuyang on 16/2/23.
 */
@SpringBootApplication
//@ImportResource("classpath:consumer.xml")
public class OnlineApplication extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
        return builder.sources(OnlineApplication.class);
    }

    public static void main(String[] args) {
        SpringApplication.run(OnlineApplication.class, args);
    }
}
