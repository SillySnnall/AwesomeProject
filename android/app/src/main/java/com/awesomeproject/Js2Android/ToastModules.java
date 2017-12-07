package com.awesomeproject.js2android;

import android.support.annotation.Nullable;
import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by User on 7/12/2017.
 */
public class ToastModules extends ReactContextBaseJavaModule {
    private static final String MODULES_NAME_TOAST = "ToastModule" ;
    private static final String TOAST_LONG_KEY = "LONG" ;
    private static final String TOAST_SHORT_KEY = "SHORT" ;
    public ToastModules(ReactApplicationContext reactContext) {
        super(reactContext);
    }
    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>() ;
        constants.put(TOAST_LONG_KEY, Toast.LENGTH_LONG) ;
        constants.put(TOAST_SHORT_KEY, Toast.LENGTH_SHORT) ;
        return constants;
    }
    @Override
    public String getName() {
        return MODULES_NAME_TOAST;
    }
    @ReactMethod
    public void show(String txt , int duration) {
        Toast.makeText(getReactApplicationContext(),txt,duration).show() ;
    }

    @ReactMethod
    public void getConstant(Callback successCallback) {
        successCallback.invoke("哈哈哈");
    }
}