package Util;

import java.util.Random;

public class GenerateRandomString {

    public String randomString(int stringLength) {
        char[] chars = "abcdefghijklmnopqrstuvwxyz".toCharArray();
        StringBuilder sb = new StringBuilder(stringLength);
        Random random = new Random();
        for (int i = 0; i < stringLength; i++) {
            char c = chars[random.nextInt(chars.length)];
            sb.append(c);
        }
        //System.out.println(strg);
        return sb.toString();
    }
}
