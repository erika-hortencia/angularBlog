import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { mockData } from '../../data/mockData';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input()
  photoCover: string ="https://clickpetroleoegas.com.br/wp-content/uploads/2025/03/Ameca-NR-3-scaled-1.jpg"
  @Input()
  contenTitle: string = "THE NEWS"
  @Input()
  contentDescription: string = "This is the news."
  private id:string | null="0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value  =>  
      this.id = (value.get("id"))
    )

    this.steValuesToComponent(this.id)
  }

  steValuesToComponent(id:string | null){
    const result = mockData.filter(article  => article.id == id)[0]

    this.contenTitle = result.title
    this.contentDescription = result.description
    this.photoCover = result.photoCover
  }

}
