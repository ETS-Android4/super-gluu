//
//  BaseViewController.swift
//  Super Gluu
//
//  Created by Eric Webb on 9/25/18.
//  Copyright © 2018 Gluu. All rights reserved.
//

import UIKit

class BaseViewController: UIViewController {

    // MARK: - Variables
    
    override var preferredStatusBarStyle: UIStatusBarStyle {
        .lightContent
    }
    
    
    // MARK: - View Lifecycle
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        navigationItem.title = ""
        setNeedsStatusBarAppearanceUpdate()
    }
}
