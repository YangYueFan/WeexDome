//
//  YYF_Base_Module.m
//  WeexDemo
//
//  Created by 科技部iOS on 2018/12/21.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "YYF_Base_Module.h"

@implementation YYF_Base_Module
@synthesize weexInstance;

-(void)showAlert:(NSString *)title
         message:(NSString *)msg
      cancelText:(NSString *)cancelText
     confirmText:(NSString *)confirmText
   confirmHandle:(void (^)(void))handleBlock{
    
    UIAlertController *alertCTL = [UIAlertController alertControllerWithTitle:title message:msg preferredStyle:UIAlertControllerStyleAlert];
    UIAlertAction *cancle = [UIAlertAction actionWithTitle:cancelText style:UIAlertActionStyleCancel handler:nil];
    UIAlertAction *setting = [UIAlertAction actionWithTitle:confirmText style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
        if (handleBlock) {
            handleBlock();
        }
    }];
    
    [alertCTL addAction:cancle];
    [alertCTL addAction:setting];
    [self.weexInstance.viewController.navigationController  presentViewController:alertCTL animated:true completion:nil];
}


-(void)showSheet:(nullable NSString *)title
         message:(nullable NSString *)msg
    confirmTexts:(NSArray *)confirmTexts
   confirmHandle:(ActionBlcok)handleBlock{
    
    UIAlertController *alertCTL = [UIAlertController alertControllerWithTitle:title message:msg preferredStyle:UIAlertControllerStyleActionSheet];
    UIAlertAction *cancle = [UIAlertAction actionWithTitle:@"取消" style:UIAlertActionStyleCancel handler:nil];
    [alertCTL addAction:cancle];
    
    for (NSInteger i = 0;i<confirmTexts.count ;i++) {
        UIAlertAction *action = [UIAlertAction actionWithTitle:confirmTexts[i] style:UIAlertActionStyleDefault handler:^(UIAlertAction * _Nonnull action) {
            if (handleBlock) {
                handleBlock(i,confirmTexts[i]);
            }
        }];
        [alertCTL addAction:action];
    }
    [self.weexInstance.viewController.navigationController  presentViewController:alertCTL animated:true completion:nil];
}

@end
