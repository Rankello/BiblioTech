import { Component, OnInit } from '@angular/core';
import { Page } from '../../shared/models/page.model';
import { PageService } from '../../services/page/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  pages: Page[] = [];
  nouvellePage: Page = { id: 0, title: '', content: '', livreId: 0, createdAt: new Date(), updatedAt: new Date() };
  pageToUpdate: Page = { id: 0, title: '', content: '', livreId: 0, createdAt: new Date(), updatedAt: new Date() };

  constructor(private pageService: PageService) {}

  ngOnInit(): void {
    this.getPages();
  }

  getPages(): void {
    this.pageService.getPages().subscribe(pages => this.pages = pages);
  }

  createPage(): void {
    this.pageService.createPage(this.nouvellePage).subscribe(() => {
      this.nouvellePage = { id: 0, title: '', content: '', livreId: 0, createdAt: new Date(), updatedAt: new Date() };
      this.getPages(); // Actualiser la liste des pages après la création
    });
  }

  updatePage(): void {
    this.pageService.updatePage(this.pageToUpdate).subscribe(() => {
      this.pageToUpdate = { id: 0, title: '', content: '', livreId: 0, createdAt: new Date(), updatedAt: new Date() };
      this.getPages(); // Actualiser la liste des pages après la mise à jour
    });
  }

  deletePage(pageId: number): void {
    this.pageService.deletePage(pageId).subscribe(() => {
      this.getPages(); // Actualiser la liste des pages après la suppression
    });
  }
}