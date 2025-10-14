package com.trade.ProjectTrade.controller;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.service.MyPageService;
import com.trade.ProjectTrade.service.TradeService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MyPageController {

    private final MyPageService myPageService;

    @GetMapping("/store/{store_id}")
    public String mypage(@PathVariable int store_id, Model model)  {
        System.out.println("mypage/store---------------------------------------------");
        model.addAttribute("store", myPageService.selectById(store_id));
        return "/mypage/store";
    }

//    @PostMapping("/store/updateName")
//    @ResponseBody
//    public Map<String, Object> updateStoreName(@RequestBody Map<String, String> payload, HttpSession session) {
//        Map<String, Object> result = new HashMap<>();
//        try {
//            // 세션에서 로그인된 사용자 정보 가져오기
//            Member loginUser = (Member) session.getAttribute("loginUser");
//            if (loginUser == null) {
//                result.put("success", false);
//                result.put("message", "로그인이 필요합니다.");
//                return result;
//            }
//
//            String newName = payload.get("name");
//            int updated = myPageService.updateStoreName(loginUser.getId(), newName);
//            result.put("success", updated > 0);
//        } catch (Exception e) {
//            result.put("success", false);
//            result.put("message", e.getMessage());
//        }
//        return result;
//    }

//    @GetMapping("/store")
//    public String mypageWithoutId(Model model) {
//        System.out.println("mypage/store (no ID) ---------------------------------------------");
//        model.addAttribute("store", null); // 또는 기본 Store 객체
//        return "/mypage/store";
//    }
//    @GetMapping("/store")
//    public String redirectToMyStore(HttpSession session) {
//        Member loginUser = (Member) session.getAttribute("loginUser");
//        if (loginUser != null) {
//            int myStoreId = loginUser.getStoreId(); // 또는 적절한 방식으로 store_id 추출
//            return "redirect:/store/" + myStoreId;
//        } else {
//            return "redirect:/login"; // 로그인 안 된 경우
//        }
//    }
}
