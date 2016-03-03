package com.whut.cailiao.online.web.test;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by niuyang on 16/2/24.
 */
@Controller
public class TestController {

    @RequestMapping("/{url}.html")
    public String gotoUrl(@PathVariable String url) {
        if (StringUtils.isNotBlank(url)) {
            return url;
        }
        return "index";
    }

}
