import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario!: string;
  datos: any;

  constructor(private router: Router, 
    private activatedRouter: ActivatedRoute) {
      this.activatedRouter.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation()?.extras.state) {
          this.datos = this.router.getCurrentNavigation()?.extras?.state?.['user'];
        }
        else{
          this.router.navigate(["/login"])
        }
      });

     }

  ngOnInit() {

    //this.usuario = this.activatedRouter.snapshot.paramMap.get('usuario')!;
  }

  cerrarSesion(){
    this.router.navigate(['/login'])
  }

}
