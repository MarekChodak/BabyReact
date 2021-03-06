package com.chodak.domain.baby.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class WebAppConfig {

    @Bean
    public WebMvcConfigurerAdapter forwardToIndex() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addViewControllers(ViewControllerRegistry registry) {
                // forward requests to /admin and /user to their index.html
                registry.addViewController("/addBaby").setViewName(
                        "forward:/index.html");
                registry.addViewController("/dashboard").setViewName(
                        "forward:/index.html");
                registry.addViewController("/measures").setViewName(
                        "forward:/index.html");
                registry.addViewController("/vaccination").setViewName(
                        "forward:/index.html");
            }
        };
    }

}
