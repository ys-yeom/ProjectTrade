package com.trade.ProjectTrade.controller;

import com.trade.ProjectTrade.model.MemberDTO;
import com.trade.ProjectTrade.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/login")
    public String LoginPage() {
        return "/login/login";
    }



    @GetMapping("/memberjoin")
    public String MemberjoinPage() {
        return "/login/memberjoin";
    }

    @PostMapping("/checkLogin")
    public ResponseEntity<Map<String, Object>> checkLogin(Model model, @RequestBody MemberDTO memberDTO, HttpSession session) {

        System.out.println("member/checkLogin---------------------------------------------");

        System.out.println(memberDTO.getEmail() + " : Controller Email");
        System.out.println(memberDTO.getPassword() + " : Controller Password");

        MemberDTO user = memberService.checkLogin(memberDTO.getEmail(), memberDTO.getPassword());

        System.out.println(user + " : Controller Return DTO");

        Map<String, Object> response = new HashMap<>();

        if (user != null) {
            session.setAttribute("user", user); // 세션에 사용자 정보 저장
            session.setAttribute("member_id", user.getMember_id());
            session.setAttribute("member_name", user.getMember_name());
            response.put("success", true);
            response.put("user", user);

            model.addAttribute("user", user);
            return ResponseEntity.ok(response);
        } else {
            response.put("success", false);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }

    @GetMapping("/checkLoginStatus")
    public ResponseEntity<Map<String, Boolean>> checkLoginStatus(HttpSession session) {
        Map<String, Boolean> response = new HashMap<>();
        response.put("isLoggedIn", session.getAttribute("user") != null); // 세션에 'user'가 있는지 확인
        return ResponseEntity.ok(response);
    }




}
