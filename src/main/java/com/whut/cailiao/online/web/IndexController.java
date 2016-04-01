package com.whut.cailiao.online.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController {

    @RequestMapping(value = {"/", "/home/index.html", "/index.html"})
    public String index() {
        return "home/index";
    }
}
