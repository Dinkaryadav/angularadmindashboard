import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  ShowDashboard(): void{
    this.router.navigate(['/dashboard']);
  }
}
