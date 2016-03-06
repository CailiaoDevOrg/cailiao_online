package com.whut.cailiao.online.web;

import org.springframework.web.bind.annotation.RestController;

/**
 * Created by niuyang on 16/2/23.
 */
@RestController
public class QuestionnaireController {

	/*
   /* @Autowired
    private QuestionnaireBaseService questionnaireBaseService;*/

	/**@RequestMapping("/{id}.html")
    public String getItemById(@PathVariable int id) {
       Questionnaire questionnaire = this.questionnaireBaseService.getQuestionnaireById(id);
        if (questionnaire == null) {
            return null;
        }
        return JSON.toJSONString(questionnaire);
    	// return null;
    }*/

}
